const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPropinaFormProps = {
  setTip: (value: number) => void,
  tip: number
}

export default function PropinaForm({ setTip, tip }: TipPropinaFormProps) {
  return (
    <div className="mt-5">
      <h3 className="font-black text-2xl">Propina:</h3>

      <form>
        {
          tipOptions.map(tipOption => (
            <div key={tipOption.id} className="flex gap-2 mt-2">
              <label htmlFor={tipOption.id}>{tipOption.label}</label>
              <input
                checked={tipOption.value === tip}
                id={tipOption.id}
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={e => setTip(+e.target.value)} />
            </div>
          ))


        }
      </form>
    </div>
  )
}
