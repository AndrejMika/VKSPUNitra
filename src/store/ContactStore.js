// src/stores/contactStore.js
import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  state: () => ({
    form: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    formErrors: {},
    submittedName: "", // To store the name of the user after submission
    formSuccess: false, // To track the form submission state
  }),
  actions: {
    validateForm() {
      this.formErrors = {};

      if (!this.form.name.trim()) {
        this.formErrors.name = "This field is required.";
      }
      if (!this.form.email.trim() || !/\S+@\S+\.\S+/.test(this.form.email)) {
        this.formErrors.email = "This is not a valid email.";
      }
      if (!this.form.phone.trim()) {
        this.formErrors = { ...this.formErrors, phone: "Phone number is required." };
      } else if (!/^\d+$/.test(this.form.phone)) {
        this.formErrors = { ...this.formErrors, phone: "This is not a valid phone." };
      }
      if (!this.form.message.trim() || this.form.message.length < 20) {
        this.formErrors.message = "The message is too short.";
      }

      console.log('storeone',this.formErrors);
      return Object.keys(this.formErrors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        // Store the name for the thank-you message
        this.submittedName = this.form.name;
        this.formSuccess = true;

        // Reset the form
        this.form = {
          name: "",
          email: "",
          phone: "",
          message: "",
        };

        // Hide the success message after 5 seconds
        setTimeout(() => {
          this.formSuccess = false;
          this.submittedName = ""; // Clear the name after showing the message
        }, 5000);
      }
    },
  },
});
