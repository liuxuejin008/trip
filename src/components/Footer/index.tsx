// import { useTranslation } from 'react-i18next'

type LinkItem = {
  title: string
  href: string
}

type LinkProps = {
  list: LinkItem[]
  title: string
}
function Link({ list, title }: LinkProps) {
  return (
    <div className="flex flex-col gap-2 min-w-[180px]">
      <div className="text-white text-16 font-medium">{title}</div>
      <div className="flex flex-col text-[#999990] text-14">
        {list.map(item => <a target="_blank" className="hover:text-white leading-6" href={item.href}>{item.title}</a>)}
      </div>
    </div>
  )
}
export function Footer() {
  // const { t } = useTranslation()
  const links = [
    {
      title: 'AI 工具链',
      list: [
        {
          title: 'woy',
          href: 'https://woy.ai/',
        },
        {
          title: 'AI生成文字图片',
          href: '#'
        },
        {
          title: 'AI特征生成器',
          href: '#'
        },
        {
          title: 'AI FAQ 生成器',
          href: '#'
        },
        {
          title: 'AI推荐生成器',
          href: '#'
        }
      ]
    },
    {
      title: 'AI 工具',
      list: [
        {
          title: 'woy',
          href: 'https://woy.ai/',
        },
        {
          title: 'AI生成文字图片',
          href: '#'
        },
        {
          title: 'AI特征生成器',
          href: '#'
        },
        {
          title: 'AI FAQ 生成器',
          href: '#'
        },
        {
          title: 'AI推荐生成器',
          href: '#'
        }
      ]
    },
    {
      title: 'AI 连接',
      list: [
        {
          title: 'AI在线抠图',
          href: '#'
        },
        {
          title: 'AI生成文字图片',
          href: '#'
        },
        {
          title: 'AI特征生成器',
          href: '#'
        },
        {
          title: 'AI FAQ 生成器',
          href: '#'
        },
        {
          title: 'AI推荐生成器',
          href: '#'
        }
      ]
    },
    {
      title: '网站导航',
      list: [
        {
          title: 'AI在线抠图',
          href: '#'
        },
        {
          title: 'AI生成文字图片',
          href: '#'
        },
        {
          title: 'AI特征生成器',
          href: '#'
        },
        {
          title: 'AI FAQ 生成器',
          href: '#'
        },
        {
          title: 'AI推荐生成器',
          href: '#'
        }
      ]
    }
  ]

  return (
    <footer className="w-screen bg-[#222224] flex flex-col items-center gap-9 pt-11 pb-7">
      <div className="flex items-center gap-9">
        <img className="w-36" src="/logo.png" alt="logo" />
        <div className="w-[1px] self-stretch bg-[#353533]"></div>
        <div className="grid grid-cols-4 gap-6">
          {links.map(item => <Link key={item.title} list={item.list} title={item.title} />)}
        </div>
      </div>
      <div className="text-[#999990] text-16">© 2024 All right reserved by Tourtally</div>
      {/* <div className="mt-[140px] text-center">
        <div className="text-primary-light text-48 font-medium">{t('title')}</div>
        <div className="text-32 text-white mt-9">{t('description')}</div>
      </div>
      <a href="#" className="flex items-center hover:opacity-80 justify-center no-underline mt-[132px] w-[442px] h-[126px] bg-dark-light rounded-lg text-32 text-white font-medium">{t('contactUs')}</a>
      <hr className="w-[1154px] h-2.5 bg-dark-light mt-[130px] border-none" />
      <div className="flex w-[670px] justify-between mt-[98px]">
        <a className="text-32 font-medium text-white" href="#">{t('agreement')}</a>
        <a className="text-32 font-medium text-white" href="#">{t('policy')}</a>
      </div> */}
    </footer>
  )
}
