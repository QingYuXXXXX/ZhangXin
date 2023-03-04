import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import useCountDown from '@/utils/useCountDown'
import img from '@/assets/imgs/img.jpg'
import './index.less'

const CouponBanner: React.FC = () => {
  const { t } = useTranslation()

  const [endTime, setEndTime] = useState<number>(0)

  const { h, m, s } = useCountDown(
    {
      currentTime: Date.now(),
      endTime: endTime
    },
    () => {
      // alert('倒计时结束')
    }
  )

  useEffect(() => {
    axios.post('/api/date').then(res => {
      let data = JSON.parse(res.request.responseText)
      setEndTime(data?.time)
    })
  }, [])

  return (
    <div className='coupon-nanner'>
      <img className='coupon-nanner-img' src={img} alt='' />
      <div className='coupon-nanner-text coupon-nanner-context'>
        <div className='coupon-nanner-context-left'>
          <div className='coupon-nanner-context-left-title'>{t('methods.title')}</div>
          <div className='coupon-nanner-context-left-off'>
            <div>30% </div>
            <div> {t('methods.off')}</div>
          </div>
        </div>
        <div className='coupon-nanner-context-right'>
          <div className='coupon-nanner-context-right-time'>
            <div>{t('methods.end')}</div>
            <div className='coupon-nanner-context-right-date'>{h}</div> h
            <div className='coupon-nanner-context-right-date'>{m}</div> m
            <div className='coupon-nanner-context-right-date'>{s}</div> s
          </div>
          <div className='coupon-nanner-context-right-card'>
            <div className='coupon-nanner-right-card-off'>
              <div>30%</div>
              <div>{t('methods.off')}</div>
            </div>
            <div className='coupon-nanner-right-card-text'>
              <div className='coupon-nanner-right-card-text-welcome'>{t('methods.welcome')}</div>
              <div className='coupon-nanner-right-card-text-save'>{t('methods.save')}</div>
              <div className='coupon-nanner-right-card-text-want'>{t('methods.want')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouponBanner
