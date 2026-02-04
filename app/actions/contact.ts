'use server'

type ContactFormData = {
  phone: string
  marketing_consent: boolean
  transactional_consent: boolean
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Check for webhook URL at runtime instead of module load time
    const webhookUrl = process.env.GHL_WEBHOOK
    if (!webhookUrl) {
      console.error('GHL_WEBHOOK environment variable is not configured')
      return { error: 'Form momentarily offline. Please try again later.' }
    }

    // Validate phone format (basic validation)
    const phoneDigits = formData.phone.replace(/\D/g, '')
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return { error: 'Please enter a valid phone number' }
    }

    // At least one consent must be given
    if (!formData.marketing_consent && !formData.transactional_consent) {
      return { error: 'Please provide at least one consent to continue' }
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Send normalized phone digits for consistent webhook data
        phone: phoneDigits,
        marketing_consent: formData.marketing_consent,
        transactional_consent: formData.transactional_consent,
        source: 'a2p_contact_form'
      })
    })

    if (!response.ok) {
      throw new Error('Webhook call failed')
    }

    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { error: 'Failed to submit form. Please try again.' }
  }
}
