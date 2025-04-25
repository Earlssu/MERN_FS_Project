import { RATE_RECOMMENDATION, THEME_GENRE } from '@/features/themes/types/types.ts';
import Button from '@/shared/components/FormElements/Button.tsx';
import React, { useState } from 'react';
import Modal from '@/shared/components/UIElements/Modal.tsx';

interface ThemeItemProps {
  id?: string;
  title: string;
  imageUrl: string;
  bookingUrl: string;
  genre: THEME_GENRE;
  rate: RATE_RECOMMENDATION;
  description: string;
}

const ThemeItem: React.FC<{ theme: ThemeItemProps }> = ({ theme }) => {
  const [showEdit, setShowEdit] = useState(false);

  const openEditHandler = () => setShowEdit(true);

  const closeEditHandler = () => setShowEdit(false);

  const getRateColor = (rate: RATE_RECOMMENDATION) => {
    switch (rate) {
      case RATE_RECOMMENDATION.LifeTheme:
        return 'bg-indigo-700 text-white';
      case RATE_RECOMMENDATION.StronglyRecommend:
        return 'bg-amber-600 text-white';
      case RATE_RECOMMENDATION.UniqueRecommend:
        return 'bg-purple-600 text-white';
      default:
        return 'bg-gray-300 text-black';
    }
  };

  return (
    <React.Fragment>
      <Modal
        show={showEdit}
        onCancel={closeEditHandler}
        children={<div>Test</div>}
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
        <div className={'flex gap-4 justify-center p-4'}>
          <Button style={'inverse'} size={'xl'} href={theme.bookingUrl}>
            예약하러 가기
          </Button>
          <Button style={'edit'} onClick={openEditHandler}>
            수정
          </Button>
          <Button style={'danger'}>삭제</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThemeItem;
