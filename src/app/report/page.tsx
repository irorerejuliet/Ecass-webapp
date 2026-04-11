import TransactionsSection from "@/components/reportDetails/TransactionsSection"
import TransparencyLedger from "@/components/reportDetails/TransparencyLedger"


const page = () => {
  return (
    <div>
      <TransparencyLedger/>
      <TransactionsSection/>
    </div>
  )
}

export default page
