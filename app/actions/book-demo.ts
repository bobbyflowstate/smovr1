'use server'

if (!process.env.GHL_WEBHOOK) {
  throw new Error('Form momentarily offline. Please try again later.')
}

const WEBHOOK_URL = process.env.GHL_WEBHOOK

type FormData = {
  name: string
  email: string
  clinicName: string
}

export async function submitBookingForm(formData: FormData) {
  try {
    // Validate email format
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return { error: 'Invalid email format' }
    }

    // Validate name
    if (!formData.name || formData.name.length < 2 || formData.name.length > 100) {
      return { error: 'Name must be between 2 and 100 characters' }
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Webhook call failed')
    }

    return { success: true }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { error: 'Failed to submit form' }
  }
} 