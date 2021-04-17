import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import { Table, TableRow } from './Table'
import { TableTitle } from './TableTitle'

export const Setup: React.FC = () => {
  const { t } = useTranslation()

  const rowsConfigPC: TableRow[] = [
    {
      title: t('setup:configPC.motherboard'),
      value: 'MSI Z87-G45 GAMING'
    },
    {
      title: t('setup:configPC.processor'),
      value: 'Intel Core i5-4690k'
    },
    {
      title: t('setup:configPC.graphicCard'),
      value: 'Zotac GeForce GTX 970'
    },
    {
      title: t('setup:configPC.ramMemory'),
      value: '16 GB (2 x 8Go) Kingston HyperX'
    },
    {
      title: t('setup:configPC.hardDrive'),
      value: '256 GB SSD Crucial & 2 TB Seagate'
    }
  ]

  const rowsPeripherals: TableRow[] = [
    {
      title: t('setup:peripheral.keyboard'),
      value: 'Corsair K95 RGB'
    },
    {
      title: t('setup:peripheral.mouse'),
      value: 'SteelSeries Rival 310'
    },
    {
      title: t('setup:peripheral.headset'),
      value: 'SteelSeries ARCTIS PRO + GAMEDAC'
    },
    {
      title: t('setup:peripheral.mainScreen'),
      value: 'IIyama PL2480H'
    },
    {
      title: t('setup:peripheral.secondScreen'),
      value: 'Samsung SyncMaster 2220LM'
    }
  ]

  const rowsOffice: TableRow[] = [
    {
      title: t('setup:officeOther.mousepad'),
      value: 'SteelSeries QCK Heavy (Grand) as string'
    },
    {
      title: 'Mouse Bungee',
      value: 'BenQ ZOWIE Camade'
    },
    {
      title: t('setup:officeOther.usb'),
      value: 'Kingston 128GB'
    },
    {
      title: 'Smartphone',
      value: 'Samsung Galaxy A5 (2017)'
    }
  ]

  return (
    <>
      <TableTitle>{t('setup:configPC.title')}</TableTitle>
      <Table rows={rowsConfigPC} />

      <TableTitle>{t('setup:peripheral.title')}</TableTitle>
      <Table rows={rowsPeripherals} />

      <TableTitle>{t('setup:officeOther.title')}</TableTitle>
      <Table rows={rowsOffice} />

      <div
        className='row row-padding justify-content-center'
        style={{ marginTop: 50 }}
      >
        <Image
          src='/images/setup/setup2019.png'
          alt='Setup Divlo'
          width={856.8}
          height={672.58}
          className='Setup__image'
        />
      </div>

      <div className='row row-padding justify-content-center'>
        <Image
          src='/images/setup/setup2019-lights.jpg'
          alt='Setup Divlo'
          width={856.8}
          height={672.58}
          className='Setup__image'
        />
      </div>

      <div className='row row-padding'>
        <TableTitle>{t('setup:connexion')}</TableTitle>
        <div style={{ marginBottom: 25 }} className='col-24 text-center'>
          <a
            href='https://www.speedtest.net/result/8533865940'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Speedtest link'
          >
            <Image
              src='/images/setup/speedtest-result.png'
              alt='Speedtest Result'
              width={308}
              height={165}
            />
          </a>
        </div>
      </div>

      <style jsx global>
        {`
          .Setup__image {
            width: 85% !important;
          }
        `}
      </style>
    </>
  )
}
