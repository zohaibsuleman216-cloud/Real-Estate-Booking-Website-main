import React from "react";
import { Modal, TextInput, Textarea, Button, Select, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { toast } from "react-toastify";

const ContactModal = ({ opened, setOpened }) => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      userType: "Owner",
      area: "",
      budget: "",
      message: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Name must have at least 2 letters" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email format"),
      phone: (value) => (value.length < 10 ? "Invalid phone number" : null),
      userType: (value) => (value ? null : "Please select an option"),
      area: (value) => (value.length < 2 ? "Please provide an area" : null),
    },
  });

  const handleSubmit = (values) => {
    // In a real application, you would send this to the backend.
    toast.success("Thank you for contacting Defining Management. We will get back to you soon!");
    form.reset();
    setOpened(false);
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={<span style={{ fontWeight: 700, fontSize: "1.2rem" }}>Contact Us</span>}
      centered
      size="lg"
      overlayProps={{
        color: "#000",
        opacity: 0.55,
        blur: 3,
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <TextInput
          withAsterisk
          label="Full Name"
          placeholder="John Doe"
          {...form.getInputProps("name")}
        />
        
        <TextInput
          withAsterisk
          label="Email Address"
          placeholder="john@example.com"
          {...form.getInputProps("email")}
        />

        <TextInput
          withAsterisk
          label="Phone Number"
          placeholder="+1 234 567 8900"
          {...form.getInputProps("phone")}
        />

        <Select
          withAsterisk
          label="I am a(n):"
          placeholder="Select an option"
          data={[
            { value: 'Owner', label: 'Property Owner (Seeking Management)' },
            { value: 'Tenant', label: 'Tenant (Seeking a Rental)' },
          ]}
          {...form.getInputProps("userType")}
        />

        <TextInput
          withAsterisk
          label="Interested Area or Property City"
          placeholder="e.g. Los Angeles, Portland"
          {...form.getInputProps("area")}
        />

        <NumberInput
          label="Approximate Budget ($/month)"
          placeholder="1500"
          min={0}
          {...form.getInputProps("budget")}
        />

        <Textarea
          label="Message or Additional Requirements"
          placeholder="Briefly describe what you're looking for..."
          minRows={4}
          {...form.getInputProps("message")}
        />

        <Button type="submit" color="blue" fullWidth mt="md" radius="md" size="md">
          Submit Inquiry
        </Button>
      </form>
    </Modal>
  );
};

export default ContactModal;
