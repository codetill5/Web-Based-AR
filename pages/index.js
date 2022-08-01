import dynamic from 'next/dynamic'
import AnotherModel from '../components/AnotherModel'

const Model = dynamic(
  () => import('../components/Model'),
  { ssr: false }
)

export default function Home() {
  return (<Model />)
}
