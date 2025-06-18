'use server'

if (!process.env.GHL_WEBHOOK) {
  throw new Error('Looks like Joy is offline - our tech team needs to wake up the environment (var)')
}

const WEBHOOK_URL = process.env.GHL_WEBHOOK

type FormData = {
  name: string
  phone: string
  smsConsent: boolean
  marketingConsent: boolean
}

export async function submitBookingForm(formData: FormData) {
  try {
    // Validate phone number format
    if (!formData.phone.match(/^\+1\d{10}$/)) {
      return { error: 'Invalid phone number format' }
    }

    // Validate name
    if (!formData.name || formData.name.length < 2 || formData.name.length > 100) {
      return { error: 'Name must be between 2 and 100 characters' }
    }

    // Validate required SMS consent
    if (!formData.smsConsent) {
      return { error: 'SMS consent is required' }
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