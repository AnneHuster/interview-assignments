import React, { FC } from "react";
import './index.scss';

interface IndicatorItemProps {
  autoPlay: boolean;
  active: boolean;
  duration: number;
  onClick?: React.MouseEventHandler;
}

const IndicatorItem: FC<IndicatorItemProps> = ({ autoPlay, active, duration, onClick }) => (
  <div className={`indicator-item ${active ? 'active' : ''}`} onClick={onClick}>
    <span
      className={active ? 'active' : ''}
      style={{
        animationDuration: `${duration}ms`,
        animationIterationCount: autoPlay ? 'infinite' : 1,
      }}
    />
  </div>
);

export default IndicatorItem;