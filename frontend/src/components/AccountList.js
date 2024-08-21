import React, { useEffect, useState } from 'react'
import { getTopAccounts, getSubAccounts } from '../api/accountAPI'

function AccountList() {
	const [accounts, setAccounts] = useState([])
	const [subAccounts, setSubAccounts] = useState([])
	const [expanded, setExpanded] = useState({})

	useEffect(() => {
		getTopAccounts()
		.then(response => setAccounts(response.data))
		.catch(error => console.error(error))
	}, [])

	const handleToggle = (ustHesapId) => {
		if(expanded[ustHesapId]) {
			setExpanded({...expanded, [ustHesapId]: false})
		}
		else {
			// Expand the account. Do not get the sub accounts if they are already fetched.
			const exist = subAccounts.find(account => account.ust_hesap_id === ustHesapId)
			if(exist) {
				setExpanded({...expanded, [ustHesapId]: true})
			}
			else {
				getSubAccounts(ustHesapId)
				.then(response => {
					setSubAccounts([...subAccounts, ...response.data])
					setExpanded({...expanded, [ustHesapId]: true})
				})
				.catch(error => console.error(error))
			}
		}
	}

  const renderSubAccounts = (ustHesapId) => {
    return subAccounts
      .filter(account => account.ust_hesap_id === ustHesapId)
      .map(account => (
        <React.Fragment key={account.id}>
          <tr>
            <td>
              {account.tipi === 'A' && (
                <button onClick={() => handleToggle(account.id)}>
                  {expanded[account.id] ? '-' : '+'}
                </button>
              )}
						</td>
						<td>
              {account.hesap_kodu}
            </td>
            <td>{account.borc}</td>
          </tr>
          {expanded[account.id] && renderSubAccounts(account.id)}
        </React.Fragment>
      ));
  };

  return (
    <table>
      <thead>
        <tr>
					<th></th>
          <th>Hesap Kodu</th>
          <th>Toplam Borç</th>
        </tr>
      </thead>
      <tbody>
        {accounts.map(account => (
          <React.Fragment key={account.ust_hesap_id}>
            <tr>
              <td>
                <button onClick={() => handleToggle(account.ust_hesap_id)}>
                  {expanded[account.ust_hesap_id] ? '-' : '+'}
                </button>
							</td>
							<td>
                {account.ust_hesap_id}
              </td>
              <td>{account.total}</td>
            </tr>
            {expanded[account.ust_hesap_id] && renderSubAccounts(account.ust_hesap_id)}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
export default AccountList