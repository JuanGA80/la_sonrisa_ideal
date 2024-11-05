import { CardPromo } from "./CardPromo"
import promoBuenFin from '../assets/promos/promo-buen-fin-1.jpg'

export function ModalInicio({closeModal}) {
  return (
    <div
      style={{backgroundColor: "rgba(0,0,0,0.8)"}}
      id="modal-inicio"
      className="fixed z-50 w-full h-full flex items-center justify-center"
    >
      <div
        className="flex flex-col p-4 h-auto bg-white flex-1 rounded-lg mx-3 md:w-1/2 sm:w-1/3 max-w-md"
      >
        <button
          className="self-end text-2xl"
          onClick={closeModal}
        >X</button>
        <CardPromo
          imgSrc={promoBuenFin}
          alt={'Promo buen fin'}
        />
      </div>
    </div>
  )
}