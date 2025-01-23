<template>
  <div id="content">
    <div class="row_7">
      <div class="container">
          <!-- Google Map -->
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 gmap">
            <div class="map">
              <iframe
                :src="googleMapSrc"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Address and Contact Form -->
        <div class="row">
          <!-- Address Section -->
          <div class="col-lg-4 col-md-4 col-sm-4 address">
            <h2>Addresses<span>{{ addressSubtitle }}</span></h2>
            <address>
              <div class="info" v-for="(address, index) in addresses" :key="index">
                <strong>{{ address.title }}</strong>
                <span>{{ address.details }}</span>
                <p>Telephones:</p>
                <ul>
                  <li v-for="(phone, phoneIndex) in address.phones" :key="phoneIndex">
                    {{ phone }}
                  </li>
                </ul>
              </div>
            </address>
          </div>

          <!-- Contact Form Section -->
          <div class="col-lg-8 col-md-8 col-sm-8 address">
            <h2>Contact Form<span></span></h2>
            <form @submit.prevent="submitForm" id="contact-form" class="contact-form">
              <!-- Success Message -->
              <div v-if="formSuccess" class="submission-success">
                Thank you, {{ submittedName }}! Your form has been successfully submitted.
              </div>

              <div class="coll-1">
                <label class="name">
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Name:"
                    :class="{ error: formErrors.name }"
                  />
                  <span v-if="formErrors.name" class="validation-error">*{{ formErrors.name }}</span>
                </label>
              </div>

              <div class="coll-2">
                <label class="name">
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="E-mail:"
                    :class="{ error: formErrors.email }"
                  />
                  <span v-if="formErrors.email" class="validation-error">*{{ formErrors.email }}</span>
                </label>
              </div>

              <div class="coll-3">
                <label class="phone">
                  <input
                    v-model="form.phone"
                    type="text"
                    placeholder="Phone:"
                    :class="{ error: formErrors.phone }"
                  />
                  <span v-if="phoneError" class="validation-error">*{{ phoneError }}</span>
                </label>
                
              </div>

              <label class="message">
                <textarea
                  v-model="form.message"
                  placeholder="Message:"
                  :class="{ error: formErrors.message }"
                ></textarea>
                <span v-if="formErrors.message" class="validation-error">*{{ formErrors.message }}</span>
              </label>

              <div>
                <button type="submit" class="btn btn-primary btn1">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useContactStore } from "../store/ContactStore";

export default {
  data() {
    const contactStore = useContactStore();
    return {
      contactStore,
      googleMapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326.9069170672706!2d18.08793548610791!3d48.306431800831085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3fd683c7fb21%3A0xf3b8e6ef017eb6c4!2sBeach%20Club%20Sl%C3%A1via%20SPU!5e0!3m2!1ssk!2ssk!4v1737506815287!5m2!1ssk!2ssk",
      addresses: [
        {
          title: "Address 1:",
          details: "94901 Nitra Spu",
          phones: ["+421 980 559 658", "+421 959 603 635", "+421 604 889 998"],
        },
        {
          title: "Address 2:",
          details: "Československej armády 1, 949 01 Nitra",
          phones: [],
        },
      ],
      addressSubtitle: "etium magna",
    };
  },
  computed: {
    form() {
      return this.contactStore.form;
    },
    formErrors() {
      return this.contactStore.formErrors;
    },
    formSuccess() {
      return this.contactStore.formSuccess;
    },
    submittedName() {
      return this.contactStore.submittedName;
    },
 
    phoneError() {
      return this.contactStore.formErrors.phone || ""; 
    },
    nameError() {
      return this.contactStore.formErrors.name || ""; 
    },
    emailError() {
      return this.contactStore.formErrors.email || ""; 
    },
    messageError() {
      return this.contactStore.formErrors.message || ""; 
    },
  },
  methods: {
    submitForm() {
      console.log('Form data:', JSON.stringify(this.form));
      console.log('Validation errors:', JSON.stringify(this.formErrors));
      console.log('prdols',this.formSuccess);
      console.log('ejoh',this.formErrors.phone); 
      console.log('trt',this.submittedName);
      this.contactStore.submitForm();
    },
  },
};
</script>
<style>
.validation-error {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
  display: block; 
}
.submission-success {
  color: green;
  font-size: 1em;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  display: block; 
}

</style>
