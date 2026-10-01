'use server'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: {
  email: string
  password: string
}) {
  const supabase = await createClient()

  const { error, data } = await supabase.auth.signInWithPassword(formData)

  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  return {
    success: true,
    message: 'Usuario autenticado exitosamente',
    data
  }
}

export async function signup(formData: {
  name: string
  email: string
  password: string
}) {
  const supabase = await createClient()

  const { error, data } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name
      }
    }
  })

  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  return {
    success: true,
    message: 'Usuario registrado exitosamente',
    data
  }
}

export async function sendRecoveyEmail(formData: {

  email: string
}) {
  const supabase = await createClient()


  const { error, data } = await supabase.auth.resetPasswordForEmail(formData.email)
  

  if (error) {
    return {
      success: false,
      message: error.message
    }
  }

  return {
    success: true,
    message: 'Correo de Recperacion enviado Exitosamente.Revisa La Bandeja de Entrada',
    data
  }
}