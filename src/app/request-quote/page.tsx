'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const quoteRequestSchema = z.object({
  name: z.string().min(1, 'Nome è richiesto'),
  email: z.string().email('Indirizzo email non valido'),
  monthlyConsumption: z.number().positive('Inserisci un consumo medio valido'),
  pricePerKWh: z.number().positive('Inserisci un prezzo per kWh valido'),
  solarProduction: z
    .number()
    .positive('Inserisci una produzione solare valida'),
  solarCostPerKWh: z.number().positive('Inserisci un costo per kWh valido'),
  installationCost: z
    .number()
    .positive('Inserisci un costo di installazione valido'),
  message: z.string().min(1, 'Messaggio è richiesto'),
})

type QuoteRequestForm = z.infer<typeof quoteRequestSchema>
export default function RequestQuote() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<QuoteRequestForm>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      monthlyConsumption: 500,
      pricePerKWh: 0.25,
      solarProduction: 600,
      solarCostPerKWh: 0.15,
      installationCost: 10000,
    },
  })

  const monthlyConsumption = useWatch({ control, name: 'monthlyConsumption' })
  const pricePerKWh = useWatch({ control, name: 'pricePerKWh' })
  const solarProduction = useWatch({ control, name: 'solarProduction' })
  const solarCostPerKWh = useWatch({ control, name: 'solarCostPerKWh' })
  const installationCost = useWatch({ control, name: 'installationCost' })

  const currentMonthlyCost =
    monthlyConsumption && pricePerKWh ? monthlyConsumption * pricePerKWh : 0
  const solarMonthlyCost =
    solarProduction && solarCostPerKWh ? solarProduction * solarCostPerKWh : 0
  const monthlySavings =
    currentMonthlyCost && solarMonthlyCost
      ? currentMonthlyCost - solarMonthlyCost
      : 0
  const annualSavings = monthlySavings ? monthlySavings * 12 : 0
  const paybackTime =
    installationCost && annualSavings ? installationCost / annualSavings : 0

  const onSubmit: SubmitHandler<QuoteRequestForm> = async (values) => {
    try {
      console.log('ALL FIELDS :: ', JSON.stringify(values))

      // values to send:
      console.log('VALUES TO SEND :: ', {
        name: values.name,
        email: values.email,
        monthlyConsumption: values.monthlyConsumption,
      })
    } catch (error) {}
  }

  return (
    <div className="flex w-full flex-col gap-6 px-4 pb-20 pt-40 lg:px-20">
      <h2 className="text-center text-[3.5rem] font-extrabold leading-title lg:text-left">
        Richiedi un Preventivo per l&#39;Energia Solare
      </h2>
      <p className="text-left leading-text-base">
        Scopri come l&#39;energia solare può portare vantaggi alla tua casa o
        azienda. Il nostro team è pronto a fornirti un preventivo dettagliato e
        personalizzato per soddisfare le tue esigenze energetiche.
      </p>

      <div className="mt-8 flex flex-col gap-6 rounded-md bg-gray-100 p-6">
        <h3 className="text-2xl font-bold">Calcolatore di Risparmio</h3>

        <Label htmlFor="monthlyConsumption" className="flex flex-col gap-2">
          <span>Consumo Mensile (kWh)</span>
          <Input
            id="monthlyConsumption"
            type="number"
            className="rounded-md border border-gray-300 p-3"
            error={errors?.monthlyConsumption}
            {...register('monthlyConsumption', { valueAsNumber: true })}
          />
        </Label>

        <Label htmlFor="pricePerKWh" className="flex flex-col gap-2">
          <span>Prezzo Attuale per kWh ( €</span>
          <Input
            id="pricePerKWh"
            type="number"
            step="0.01"
            className="rounded-md border border-gray-300 p-3"
            error={errors?.pricePerKWh}
            {...register('pricePerKWh', { valueAsNumber: true })}
          />
        </Label>

        <Label htmlFor="solarProduction" className="flex flex-col gap-2">
          <span>Produzione Solare Stimata (kWh/mese)</span>
          <Input
            id="solarProduction"
            type="number"
            className="rounded-md border border-gray-300 p-3"
            error={errors?.solarProduction}
            {...register('solarProduction', { valueAsNumber: true })}
          />
        </Label>

        <Label htmlFor="solarCostPerKWh" className="flex flex-col gap-2">
          <span>Costo Solare per kWh ( €</span>
          <Input
            id="solarCostPerKWh"
            type="number"
            step="0.01"
            className="rounded-md border border-gray-300 p-3"
            error={errors?.solarCostPerKWh}
            {...register('solarCostPerKWh', { valueAsNumber: true })}
          />
        </Label>

        <Label htmlFor="installationCost" className="flex flex-col gap-2">
          <span>Costo di Installazione ( €</span>
          <Input
            id="installationCost"
            type="number"
            className="rounded-md border border-gray-300 p-3"
            error={errors?.installationCost}
            {...register('installationCost', { valueAsNumber: true })}
          />
        </Label>

        <div className="mt-4 text-left text-gray-700">
          <p>
            Costo mensile attuale:{' '}
            <span className="font-bold">€{currentMonthlyCost.toFixed(2)}</span>
          </p>
          <p>
            Costo mensile stimato con energia solare:{' '}
            <span className="font-bold"> €{solarMonthlyCost.toFixed(2)}</span>
          </p>
          <p>
            Risparmio mensile stimato:{' '}
            <span className="font-bold"> €{monthlySavings.toFixed(2)}</span>
          </p>
          <p>
            Risparmio annuale stimato:{' '}
            <span className="font-bold"> €{annualSavings.toFixed(2)}</span>
          </p>
          <p>
            Tempo di ritorno dell&#39;investimento:{' '}
            <span className="font-bold">{paybackTime.toFixed(1)} anni</span>
          </p>
        </div>
      </div>

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
            placeholder="Descrivi le tue esigenze per l'energia solare"
            className="rounded-md border border-gray-300 p-3"
            error={errors?.message}
            {...register('message')}
          />
        </Label>

        <Button
          type="submit"
          className="group mx-auto mt-6 flex h-16 w-full max-w-[420px] items-center justify-center gap-6 rounded-full border border-brand-purple-500 bg-transparent px-6 text-xl font-bold text-brand-purple-500 hover:bg-brand-purple-500 hover:text-brand-yellow-400 lg:text-2xl xl:mt-0"
        >
          Invia la Richiesta di Preventivo
        </Button>
      </form>
    </div>
  )
}
