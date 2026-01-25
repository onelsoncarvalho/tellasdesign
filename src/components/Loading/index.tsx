import React from 'react';
import { VscLoading } from 'react-icons/vsc';

import Text from '../UI/Text';

const Loading = () => {
  return (
    <div className="min-h-screen bg-mainDark flex flex-col gap-8 items-center justify-center">
      <div className="animate-spin text-white">
        <VscLoading fontSize={60} />
      </div>
      <Text className="text-slate-50">Carregando o site...</Text>
    </div>
  );
};

export default Loading;
