import { ThemeType } from '@/features/themes/types/types.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import React, { useState } from 'react';
import Modal from '@/shared/components/UIElements/Modal.tsx';
import Map from '@/shared/components/UIElements/Map.tsx';
import { getRateColor } from '@/features/themes/hooks/useThemeUtils.ts';

interface ThemeItemProps extends ThemeType {}

const ThemeItem: React.FC<{ theme: ThemeItemProps }> = ({ theme }) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        children={<Map getInfo={theme.store_info} />}
        backdropOpacity={'medium'}
        header={theme.title}
        footer={<div>Footer</div>}
      />
      <div className={'w-5/6 mx-auto border border-gray-400 rounded-lg shadow-xl'}>
        <div className={'w-full'}>
          <img
            src={theme.imageUrl}
            alt={theme.title}
            className={'w-full max-h-80 object-cover rounded-t-lg'}
          />
        </div>
        <div className={'flex flex-col gap-2 p-4'}>
          <h3 className={'font-bold text-2xl text-slate-800'}>{theme.title}</h3>
          <div>
            추천도:{' '}
            <span
              className={`rounded-2xl text-center px-2 py-1 text-sm ${getRateColor(theme.rate)}`}
            >
              {theme.rate}
            </span>
          </div>
          <div>
            장르:{' '}
            <span className={'rounded-2xl bg-zinc-400 text-center px-2 py-1 text-sm text-white'}>
              {' '}
              {theme.genre}
            </span>
          </div>
          <div>{theme.description}</div>
        </div>
        <div className={'border-0.5 border-gray-300'} />
        <div className={'flex gap-4 justify-center p-4 flex-wrap sm:flex-nowrap'}>
          <Button style={'inverse'} size={'lg'} onClick={openMapHandler}>
            매장위치 보기
          </Button>
          <Button style={'inverse'} size={'lg'} href={theme.bookingUrl}>
            예약하러 가기
          </Button>
          <div className={'flex gap-4'}>
            <Button style={'edit'} size={'sm'}>
              수정
            </Button>
            <Button style={'danger'} size={'sm'}>
              삭제
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThemeItem;
