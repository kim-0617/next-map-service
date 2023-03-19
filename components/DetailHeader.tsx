import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineShareAlt } from 'react-icons/ai';
import type { Store } from '@/types/store';
import copy from 'copy-to-clipboard';

interface Props {
  currentStore?: Store;
  expanded: boolean;
  onClickArrow: () => void;
}

const DetailHeader = ({ currentStore, expanded, onClickArrow }: Props) => {
  return (
    <div className={'detail__header'}>
      <button
        className={`${'arrowButton'} ${expanded ? 'expanded' : ''}`}
        onClick={onClickArrow}
        disabled={!currentStore}
        aria-label={expanded ? '매장 정보 접기' : '매장 정보 펼치기'}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </button>
      {!currentStore && <p className={'title'}>매장을 선택해주세요</p>}
      {currentStore && (
        <div className={'flexRow'}>
          <h1 className={'title'}>{currentStore.name}</h1>
          <button
            className={'box'}
            onClick={() => {
              copy(location.origin + '/' + currentStore.name);
            }}
            aria-label="매장 페이지 주소 클립보드 복사"
          >
            <AiOutlineShareAlt size={20} color="#444444" />
          </button>
        </div>
      )}
    </div>
  );
};
export default DetailHeader;
