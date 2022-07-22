import transactiondata from "./data/transactiondata";


//to only display transactions related to wallet_id tagged to user

const TransactionTable = () => {
  return (
    <>
      {transactiondata.map((item) => {
        <div>
          {item.wallet_id}, {item.debit_id},{item.debit_currency},
          {item.debit_amount},{item.credit_id},{credit_currency},{credit_amount}
          ,{item.description},{item.created_at},{item.created_by},
          {item.updated_at},{item.updated_by}
        </div>;
      })}
    </>
  );
};

export default TransactionTable;


