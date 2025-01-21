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
            <h2>Contact Form<span>{{ formSubtitle }}</span></h2>
            <form @submit.prevent="submitForm" id="contact-form" class="contact-form">
              <div v-if="formSuccess" class="success-message">Contact form submitted.</div>

              <div class="coll-1">
                <label class="name">
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Name:"
                    :class="{ error: formErrors.name }"
                  />
                  <span v-if="formErrors.name" class="error-message">*{{ formErrors.name }}</span>
                </label>
              </div>

              <div class="coll-2">
                <label class="email">
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="E-mail:"
                    :class="{ error: formErrors.email }"
                  />
                  <span v-if="formErrors.email" class="error-message">*{{ formErrors.email }}</span>
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
                  <span v-if="formErrors.phone" class="error-message">*{{ formErrors.phone }}</span>
                </label>
              </div>

              <label class="message">
                <textarea
                  v-model="form.message"
                  placeholder="Message:"
                  :class="{ error: formErrors.message }"
                ></textarea>
                <span v-if="formErrors.message" class="error-message">*{{ formErrors.message }}</span>
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
export default {
  data() {
    return {
      googleMapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193572.1324218167!2d-74.11808620586806!3d40.70531103652556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2444d5f3f2e2d%3A0x7c4f77b5e2f9b6bd!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1674676812134!5m2!1sen!2sin",
      addressSubtitle: "etium magna",
      addresses: [
        {
          title: "Address 1:",
          details: "8901 Marmora Road, Glasgow, D04 89GR.",
          phones: ["+1 800 559 6580", "+1 959 603 6035", "+1 504 889 9898"],
        },
        {
          title: "Address 2:",
          details: "9867 Mill Road, Cambridge, MG09 99HT.",
          phones: [],
        },
      ],
      formSubtitle: "Nulla lacus erat",
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      formErrors: {},
      formSuccess: false,
    };
  },
  methods: {
    validateForm() {
      this.formErrors = {};

      if (!this.form.name.trim()) {
        this.formErrors.name = "This field is required.";
      }
      if (!this.form.email.trim() || !/\S+@\S+\.\S+/.test(this.form.email)) {
        this.formErrors.email = "This is not a valid email.";
      }
      if (this.form.phone && !/^\d+$/.test(this.form.phone)) {
        this.formErrors.phone = "This is not a valid phone.";
      }
      if (!this.form.message.trim() || this.form.message.length < 20) {
        this.formErrors.message = "The message is too short.";
      }

      return Object.keys(this.formErrors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        // Simulate form submission success
        this.formSuccess = true;

        // Reset form
        this.form = {
          name: "",
          email: "",
          phone: "",
          message: "",
        };

        setTimeout(() => {
          this.formSuccess = false;
        }, 3000);
      }
    },
  },
};
</script>

