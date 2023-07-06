import BLOG from '@/blog.config'
import Link from 'next/link'
import Social from '../Common/Social.js'
import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { NewspaperIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import NotionRenderer from '@/components/Post/NotionRenderer'

const NewsletterHero = ({ blockMap }) => {
  const [showCopied, setShowCopied] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]

  const clickCopy = async () => {
    setShowCopied(true)
    navigator.clipboard.writeText(BLOG.link + '/feed')
    setTimeout(() => {
      setShowCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        
      </div>
    </>
  )
}

export default NewsletterHero
