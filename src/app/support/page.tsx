'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSupportSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required')
})

type ContactSupportForm = z.infer<typeof contactSupportSchema>
export default function Support() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactSupportForm>({
    resolver: zodResolver(contactSupportSchema)
  })

  const onSubmit: SubmitHandler<{ email: string }> = async (values) => {
    try {
      console.log(JSON.stringify(values))
    } catch (error) {}
  }

  return (
    <div className="flex flex-col w-full pt-40 pb-20 gap-6 px-20">
      <h2 className="text-[3.5rem] font-extrabold leading-title">
        Assistenza e Supporto Clienti
      </h2>
      <p className="leading-text-base text-left">
        Il nostro team di supporto è sempre a disposizione per rispondere alle
        tue domande e fornire assistenza in ogni fase dell’esperienza con i
        nostri servizi. Ci impegniamo a risolvere ogni tua richiesta in modo
        rapido e professionale.
      </p>

      <p className="leading-text-base text-left">
        Per questioni tecniche o informazioni sui prodotti, puoi contattare il
        nostro servizio clienti via e-mail, telefono o chat dal vivo. Il nostro
        team è addestrato per offrire soluzioni tempestive e efficaci.
      </p>

      <p className="leading-text-base text-left">
        Offriamo inoltre una sezione di domande frequenti (FAQ) dove puoi
        trovare risposte immediate ai quesiti più comuni. Questa sezione è
        aggiornata costantemente per garantirti accesso a informazioni utili in
        tempo reale.
      </p>

      <p className="leading-text-base text-left">
        Se preferisci, puoi anche utilizzare il nostro sistema di ticket online,
        che ti permette di segnalare eventuali problemi o inviare richieste
        specifiche. Riceverai una risposta entro 24 ore lavorative.
      </p>

      <p className="leading-text-base text-left">
        I nostri orari di supporto sono dal lunedì al venerdì, dalle 9:00 alle
        18:00. Fuori dagli orari di assistenza, puoi lasciare un messaggio e
        sarai ricontattato il prima possibile.
      </p>

      <p className="leading-text-base text-left">
        Il nostro obiettivo è fornire un servizio eccellente, garantendo una
        comunicazione chiara e soluzioni che rispondano ai tuoi bisogni. In caso
        di suggerimenti o reclami, ti invitiamo a condividere il tuo feedback
        per aiutarci a migliorare.
      </p>

      <p className="leading-text-base text-left">
        Grazie per aver scelto i nostri servizi. Siamo qui per assicurarti
        un’esperienza soddisfacente e per risolvere ogni dubbio in modo
        professionale.
      </p>

      {/* Botão para chamada telefônica */}
      <div className="flex gap-4 mt-8">
        <a
          href="tel:+390123456789"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Chiama il Supporto (+39 012 345 6789)
        </a>
      </div>

      <p className="leading-text-base text-left mt-8">
        Se preferisci, puoi anche utilizzare il modulo di contatto qui sotto per
        inviare una richiesta specifica o segnalare un problema. Il nostro team
        ti risponderà entro 24 ore lavorative.
      </p>

      {/* Formulário de Contato */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-8"
      >
        <Label htmlFor="name" className="flex gap-2 flex-col">
          <span className="font-semibold">Nome</span>
          <Input
            id="name"
            type="text"
            placeholder="Inserisci il tuo nome"
            className="p-3 border border-gray-300 rounded-md"
            error={errors?.name}
            {...register('name')}
          />
        </Label>

        <Label htmlFor="email" className="flex gap-2 flex-col">
          <span className="font-semibold">Email</span>
          <Input
            id="email"
            type="email"
            placeholder="Inserisci la tua email"
            className="p-3 border border-gray-300 rounded-md"
            error={errors?.email}
            {...register('email')}
          />
        </Label>

        <Label htmlFor="text-area" className="flex gap-2 flex-col">
          <span className="font-semibold">Messaggio</span>
          <Textarea
            id="text-area"
            placeholder="Scrivi il tuo messaggio qui"
            className="p-3 border border-gray-300 rounded-md"
            error={errors?.message}
            {...register('message')}
          />
        </Label>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Invia il Messaggio
        </button>
      </form>
    </div>
  )
}
