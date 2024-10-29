import { Card } from './components/card'
import { ImageMobile } from './components/image-mobile'
import { ImagePC } from './components/image-pc'

interface Props {
  id?: string
}

export function SectionServices({ id }: Props) {
  return (
    <section
      id={id || 'services'}
      className="flex w-full flex-col items-center py-7 pb-[523px] sm:pb-[800px] lg:flex-row lg:pb-8 xl:pb-36"
    >
      <div className="mx-auto size-full max-w-[1920px] grid-cols-[562px_auto] lg:grid lg:grid-cols-[656px_auto]">
        <ImagePC />

        <div className="flex-1 px-4 pb-6 lg:pl-0 lg:pr-20">
          <div className="flex w-full max-w-[1180px] flex-1 flex-col xl:my-20">
            <span className="mb-2 text-center text-xl font-medium text-brand-yellow-700 lg:text-left">
              Services
            </span>
            <h2 className="text-center text-[3.5rem] font-extrabold leading-title lg:text-left">
              Personalized services
            </h2>
            <p className="text-center text-xl leading-9 lg:text-left">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
            <div className="grid w-full grid-cols-2 gap-12 pt-12">
              <Card
                title="Et mauris"
                icon="truck"
                iconStyle="text-brand-purple-500"
                content="Posuere quis sed mauris non curabitur pretium elementum eget.
                Feugiat sed maecenas eu accumsan tristique."
              />
              <Card
                title="Eget sit"
                icon="trekking"
                iconStyle="text-brand-purple-500"
                content="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
              />
              <Card
                title="Imperdiet pellentesque"
                icon="trophy"
                iconStyle="text-brand-purple-500"
                content="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
              />
              <Card
                title="Non libero"
                icon="piggy-bank"
                iconStyle="text-brand-purple-500"
                content="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
              />
            </div>
          </div>
        </div>
        <ImageMobile />
      </div>
    </section>
  )
}
