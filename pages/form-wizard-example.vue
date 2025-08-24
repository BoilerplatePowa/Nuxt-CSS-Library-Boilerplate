<template>
  <div class="min-h-screen bg-base-200 py-8">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4 text-base-content">FormWizard Example</h1>
        <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
          A comprehensive multi-step form wizard with validation using DaisyUI and Tailwind CSS
        </p>
      </div>

      <!-- Form Wizard -->
      <div class="max-w-4xl mx-auto">
        <FormWizard
          v-model="currentStep"
          :steps="wizardSteps"
          :step-data="stepData"
          :show-steps="true"
          :steps-variant="'default'"
          :steps-color="'primary'"
          :show-progress="true"
          :show-summary="true"
          @step-change="handleStepChange"
          @step-complete="handleStepComplete"
          @wizard-complete="handleWizardComplete"
        >
          <!-- Step 0: Personal Information -->
          <template #step-0="{ errors, meta }">
            <div class="space-y-8">
              <div class="text-center">
                <div class="avatar placeholder mb-6">
                  <div class="bg-primary text-primary-content rounded-full w-20">
                    <Icon name="user" size="lg" />
                  </div>
                </div>
                <h2 class="text-2xl font-bold mb-3 text-base-content">Personal Information</h2>
                <p class="text-base-content/70 max-w-lg mx-auto">Please provide your basic details to get started.</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  left-icon="user"
                  required
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="Doe"
                  left-icon="user"
                  required
                />
              </div>

              <Input
                name="email"
                label="Email Address"
                type="email"
                placeholder="john.doe@example.com"
                left-icon="mail"
                required
              />

              <Input
                name="phone"
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                left-icon="phone"
                mask-type="phone"
              />
            </div>
          </template>

          <!-- Step 1: Address Information -->
          <template #step-1="{ errors, meta }">
            <div class="space-y-8">
              <div class="text-center">
                <div class="avatar placeholder mb-6">
                  <div class="bg-secondary text-secondary-content rounded-full w-20">
                    <Icon name="map-pin" size="lg" />
                  </div>
                </div>
                <h2 class="text-2xl font-bold mb-3 text-base-content">Address Information</h2>
                <p class="text-base-content/70 max-w-lg mx-auto">Please provide your address details.</p>
              </div>

              <div class="space-y-6">
                <Input
                  name="address"
                  label="Street Address"
                  placeholder="123 Main Street"
                  left-icon="map-pin"
                  required
                />

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  name="city"
                  label="City"
                  placeholder="New York"
                  left-icon="building"
                  required
                />
                <Input
                  name="state"
                  label="State"
                  placeholder="NY"
                  left-icon="map-pin"
                  required
                />
                <Input
                  name="zipCode"
                  label="ZIP Code"
                  placeholder="10001"
                  left-icon="map-pin"
                  mask-type="zip"
                  required
                />
              </div>

              <Select
                name="country"
                label="Country"
                :options="countryOptions"
                placeholder="Select your country"
                required
              />
            </div>
          </template>

          <!-- Step 2: Preferences -->
          <template #step-2="{ errors, meta }">
            <div class="space-y-8">
              <div class="text-center">
                <div class="avatar placeholder mb-6">
                  <div class="bg-accent text-accent-content rounded-full w-20">
                    <Icon name="settings" size="lg" />
                  </div>
                </div>
                <h2 class="text-2xl font-bold mb-3 text-base-content">Preferences</h2>
                <p class="text-base-content/70 max-w-lg mx-auto">Set your communication and account preferences.</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  name="language"
                  label="Preferred Language"
                  :options="languageOptions"
                  placeholder="Select language"
                  required
                />
                <Select
                  name="timezone"
                  label="Timezone"
                  :options="timezoneOptions"
                  placeholder="Select timezone"
                  required
                />
              </div>

              <div class="checkbox-group">
                <Toggle
                  name="newsletter"
                  label="Subscribe to Newsletter"
                  description="Receive updates about new features and products"
                />
                <Toggle
                  name="notifications"
                  label="Enable Notifications"
                  description="Get notified about important updates"
                />
                <Toggle
                  name="marketing"
                  label="Marketing Communications"
                  description="Receive promotional emails and offers"
                />
              </div>
            </div>
          </template>

          <!-- Step 3: Terms and Conditions -->
          <template #step-3="{ errors, meta }">
            <div class="space-y-8">
              <div class="text-center">
                <div class="avatar placeholder mb-6">
                  <div class="bg-success text-success-content rounded-full w-20">
                    <Icon name="check-circle" size="lg" />
                  </div>
                </div>
                <h2 class="text-2xl font-bold mb-3 text-base-content">Terms and Conditions</h2>
                <p class="text-base-content/70 max-w-lg mx-auto">Please review and accept our terms.</p>
              </div>

              <div class="card bg-base-100 shadow-sm border border-base-300">
                <div class="card-body">
                  <h3 class="card-title text-lg mb-4">Terms of Service</h3>
                  <div class="prose prose-sm max-h-40 overflow-y-auto">
                  <p>
                    By using our service, you agree to these terms and conditions. We are committed to protecting your privacy and providing a secure experience.
                  </p>
                  <p>
                    You agree not to use our service for any unlawful purpose or to transmit any material that is defamatory, offensive, or otherwise objectionable.
                  </p>
                  <p>
                    We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of any changes.
                  </p>
                  <p>
                    Your data will be handled in accordance with our privacy policy. We will never share your personal information with third parties without your explicit consent.
                  </p>
                </div>
              </div>

              <div class="space-y-4">
                <div class="card bg-base-200 shadow-sm">
                  <div class="card-body p-4">
                    <Checkbox
                      name="terms"
                      label="I accept the Terms of Service"
                      description="You must accept the terms to continue"
                      required
                    />
                  </div>
                </div>
                <div class="card bg-base-200 shadow-sm">
                  <div class="card-body p-4">
                    <Checkbox
                      name="privacy"
                      label="I accept the Privacy Policy"
                      description="You must accept the privacy policy to continue"
                      required
                    />
                  </div>
                </div>
                <div class="card bg-base-200 shadow-sm">
                  <div class="card-body p-4">
                    <Checkbox
                      name="age"
                      label="I confirm I am at least 18 years old"
                      description="You must be 18 or older to use this service"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </FormWizard>
      </div>

      <!-- Success Modal -->
      <Modal v-model="showSuccessModal" title="Registration Complete!">
        <div class="text-center py-6">
          <div class="avatar placeholder mb-6">
            <div class="bg-success text-success-content rounded-full w-20">
              <Icon name="check-circle" size="lg" />
            </div>
          </div>
          <h3 class="text-xl font-bold mb-3 text-base-content">Welcome aboard!</h3>
          <p class="text-base-content/70 mb-6 max-w-md mx-auto">
            Your account has been created successfully. You can now access all our features.
          </p>
          <div class="card bg-base-200 shadow-sm">
            <div class="card-body p-4">
              <h4 class="font-semibold mb-3 text-base-content">Registration Summary:</h4>
              <div class="bg-base-100 p-3 rounded-lg">
                <pre class="text-xs overflow-auto text-base-content/80">{{ JSON.stringify(finalData, null, 2) }}</pre>
              </div>
            </div>
          </div>
        </div>
        <template #actions>
          <Button @click="showSuccessModal = false" variant="success" class="btn btn-success">
            <Icon name="check" size="sm" />
            Get Started
          </Button>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as yup from 'yup';

// Page metadata
useHead({
  title: 'FormWizard Example - Multi-step Form',
  meta: [
    { name: 'description', content: 'Example of a comprehensive multi-step form wizard with validation' }
  ]
});

// Reactive state
const currentStep = ref(0);
const stepData = ref({});
const showSuccessModal = ref(false);
const finalData = ref({});

// Wizard steps configuration
const wizardSteps = [
  {
    title: 'Personal Info',
    description: 'Basic details',
    icon: 'user',
    schema: yup.object({
      firstName: yup.string().required('First name is required'),
      lastName: yup.string().required('Last name is required'),
      email: yup.string().email('Please enter a valid email').required('Email is required'),
      phone: yup.string().required('Phone number is required')
    })
  },
  {
    title: 'Address',
    description: 'Location details',
    icon: 'map-pin',
    schema: yup.object({
      address: yup.string().required('Address is required'),
      city: yup.string().required('City is required'),
      state: yup.string().required('State is required'),
      zipCode: yup.string().required('ZIP code is required'),
      country: yup.string().required('Country is required')
    })
  },
  {
    title: 'Preferences',
    description: 'Account settings',
    icon: 'settings',
    schema: yup.object({
      language: yup.string().required('Please select a language'),
      timezone: yup.string().required('Please select a timezone'),
      newsletter: yup.boolean(),
      notifications: yup.boolean(),
      marketing: yup.boolean()
    })
  },
  {
    title: 'Terms',
    description: 'Legal agreement',
    icon: 'check-circle',
    schema: yup.object({
      terms: yup.boolean().oneOf([true], 'You must accept the terms of service'),
      privacy: yup.boolean().oneOf([true], 'You must accept the privacy policy'),
      age: yup.boolean().oneOf([true], 'You must confirm you are 18 or older')
    })
  }
];

// Options for select components
const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'other', label: 'Other' }
];

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'ru', label: 'Russian' },
  { value: 'zh', label: 'Chinese' }
];

const timezoneOptions = [
  { value: 'utc', label: 'UTC' },
  { value: 'est', label: 'Eastern Time (ET)' },
  { value: 'cst', label: 'Central Time (CT)' },
  { value: 'mst', label: 'Mountain Time (MT)' },
  { value: 'pst', label: 'Pacific Time (PT)' },
  { value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
  { value: 'cet', label: 'Central European Time (CET)' },
  { value: 'jst', label: 'Japan Standard Time (JST)' }
];

// Event handlers
const handleStepChange = (step: number, previousStep: number) => {
  console.log(`Step changed from ${previousStep} to ${step}`);
};

const handleStepComplete = (step: number, data: any) => {
  stepData.value[`step_${step}`] = data;
  console.log(`Step ${step} completed:`, data);
};

const handleWizardComplete = (data: any) => {
  console.log('Wizard completed:', data);
  finalData.value = data;
  showSuccessModal.value = true;
};
</script>

<!-- Styles are imported from src/assets/css/form-wizard.css -->
