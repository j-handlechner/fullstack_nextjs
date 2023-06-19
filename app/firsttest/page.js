import Link from 'next/link'
import supabase from '../../utils/supabase'

export const revalidate = 0

export default async function Firsttest() {
  const { data: transactions } = await supabase.from('transactions').select()

  if (!transactions) {
    return <p>No transactions found.</p>
  }

  return transactions.map((t) => (
    <p key={t.id}>
      <p>{t.title} {t.total}</p>
    </p>
  ))
}