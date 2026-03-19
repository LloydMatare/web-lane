import ChatInterface from '@/components/chat'
import React from 'react'

const Page = async ({ params }: {
  params: Promise<{ slugid: string }>
}) => {
  const { slugid } = await params;
  return (
    <div>
      <ChatInterface
        key={slugid}
        isProjectPage={true}
        slugid={slugid}
      />
    </div>
  )
}

export default Page
