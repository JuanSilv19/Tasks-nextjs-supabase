'use server'

import { countryCodes } from "@/components/phoneInput"
import { createClient } from "@/lib/supabase/server"
import { Phone } from "lucide-react"
import { success } from "zod"
import { id } from "zod/v4/locales"

export async function updateProfile (values:{
    id: string
    name: string
    phone?: string | null
    country_code?: string | null
}) {
    const supabase = await createClient()

    const { error } = await supabase.from('profilees').upsert({
        id: values.id,
        name: values.name,
        phone: values.phone,
        countrycode: values.country_code,
        updated_at: new Date().toISOString(),

    })


    if (error) {
        console.error('Error updating profile:', error)
        throw new Error ('Hubo un error al actualizar el perfil.')
    }

    return { success: true }






}