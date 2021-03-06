// Copyright 2017-2019 @polkadot/react-hooks authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import {useEffect, useState} from 'react';
import accountObservable from '@polkadot/ui-keyring/observable/accounts';

export default function useAccounts(): string[] {
  const [state, setState] = useState([]);

  useEffect(() => {
    const subscription = accountObservable.subject.subscribe(accounts => {
      const allAccounts = accounts ? Object.keys(accounts) : [];

      setState(allAccounts);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return state;
}
