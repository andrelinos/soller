'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Link } from '@/components/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const contactSupportSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
})

type ContactSupportForm = z.infer<typeof contactSupportSchema>
export default function Support() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSupportForm>({
    resolver: zodResolver(contactSupportSchema),
  })

  const onSubmit: SubmitHandler<{ email: string }> = async (values) => {
    try {
      console.log(JSON.stringify(values))
    } catch (error) {}
  }

  return (
    <div className="flex w-full flex-col gap-6 px-4 pb-20 pt-40 lg:px-20">
      <h2 className="text-center text-[3.5rem] font-extrabold leading-title lg:text-left">
        Assistenza e Supporto Clienti
      </h2>
      <p className="text-left leading-text-base">
        Il nostro team di supporto è sempre a disposizione per rispondere alle
        tue domande e fornire assistenza in ogni fase dell’esperienza con i
        nostri servizi. Ci impegniamo a risolvere ogni tua richiesta in modo
        rapido e professionale.
      </p>

      <p className="text-left leading-text-base">
        Per questioni tecniche o informazioni sui prodotti, puoi contattare il
        nostro servizio clienti via e-mail, telefono o chat dal vivo. Il nostro
        team è addestrato per offrire soluzioni tempestive e efficaci.
      </p>

      <p className="text-left leading-text-base">
        Offriamo inoltre una sezione di domande frequenti (FAQ) dove puoi
        trovare risposte immediate ai quesiti più comuni. Questa sezione è
        aggiornata costantemente per garantirti accesso a informazioni utili in
        tempo reale.
      </p>

      <p className="text-left leading-text-base">
        Se preferisci, puoi anche utilizzare il nostro sistema di ticket online,
        che ti permette di segnalare eventuali problemi o inviare richieste
        specifiche. Riceverai una risposta entro 24 ore lavorative.
      </p>

      <p className="text-left leading-text-base">
        I nostri orari di supporto sono dal lunedì al venerdì, dalle 9:00 alle
        18:00. Fuori dagli orari di assistenza, puoi lasciare un messaggio e
        sarai ricontattato il prima possibile.
      </p>

      <p className="text-left leading-text-base">
        Il nostro obiettivo è fornire un servizio eccellente, garantendo una
        comunicazione chiara e soluzioni che rispondano ai tuoi bisogni. In caso
        di suggerimenti o reclami, ti invitiamo a condividere il tuo feedback
        per aiutarci a migliorare.
      </p>

      <p className="text-left leading-text-base">
        Grazie per aver scelto i nostri servizi. Siamo qui per assicurarti
        un’esperienza soddisfacente e per risolvere ogni dubbio in modo
        professionale.
      </p>

      <div className="mx-auto mt-8 flex gap-4 lg:mx-0">
        <Link
          variant="ghost"
          href="tel:555818282"
          externalLink
          size="social"
          className="flex h-16 items-center gap-4 rounded-full border px-6 text-lg text-brand-blue-500"
        >
          Chiama il Supporto (555 818 282)
        </Link>
      </div>

      <p className="mt-8 text-left leading-text-base">
        Se preferisci, puoi anche utilizzare il modulo di contatto qui sotto per
        inviare una richiesta specifica o segnalare un problema. Il nostro team
        ti risponderà entro 24 ore lavorative.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 flex flex-col gap-6"
      >
        <Label htmlFor="name" className="flex flex-col gap-2">
          <span className="font-semibold">Nome</span>
          <Input
            id="name"
            type="text"
            placeholder="Inserisci il tuo nome"
            className="rounded-md border border-gray-300 p-3"
            error={errors?.name}
            {...register('name')}
          />
        </Label>

        <Label htmlFor="email" className="flex flex-col gap-2">
          <span className="font-semibold">Email</span>
          <Input
            id="email"
            type="email"
            placeholder="Inserisci la tua email"
            className="rounded-md border border-gray-300 p-3"
            error={errors?.email}
            {...register('email')}
          />
        </Label>

        <Label htmlFor="text-area" className="flex flex-col gap-2">
          <span className="font-semibold">Messaggio</span>
          <Textarea
            id="text-area"
            placeholder="Scrivi il tuo messaggio qui"
            className="rounded-md border border-gray-300 p-3"
            error={errors?.message}
            {...register('message')}
          />
        </Label>

        <Button
          type="submit"
          className="group mx-auto mt-6 flex h-16 w-full max-w-[420px] items-center justify-center gap-6 rounded-full border border-brand-purple-500 bg-transparent px-6 text-xl font-bold text-brand-purple-500 hover:bg-brand-purple-500 hover:text-brand-yellow-400 lg:text-2xl xl:mt-0"
        >
          Invia il Messaggio
        </Button>
      </form>
    </div>
  )
}
