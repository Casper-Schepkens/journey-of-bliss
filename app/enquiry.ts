"use server";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  whatsappUrl?: string;
};

function field(formData: FormData, name: string, max: number) {
  return String(formData.get(name) ?? "").trim().slice(0, max);
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  // TODO: Email this enquiry once a mailbox is connected.
  // The old site listed info@journeyofbliss.com, which is not active yet.
  // Do not send mail and do not store the submission until that address is confirmed.
  const company = field(formData, "company", 200);
  if (company) {
    return {
      status: "success",
      message: "Thank you. Please message us on WhatsApp if you still need a reply.",
    };
  }

  const name = field(formData, "name", 120);
  const email = field(formData, "email", 200);
  const phone = field(formData, "phone", 40);
  const message = field(formData, "message", 2000);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length < 8 || message.length < 5) {
    return {
      status: "error",
      message: "Please add your name, a valid email, a mobile number, and a short message.",
    };
  }

  const text = `Hello Journey of Bliss, my name is ${name}.\n${message}\nMobile: ${phone}\nEmail: ${email}`;

  return {
    status: "success",
    message:
      "Thank you. Email is not connected yet, so this note was not sent as an email. Send it on WhatsApp and we will reply there.",
    whatsappUrl: `https://wa.me/919669966836?text=${encodeURIComponent(text)}`,
  };
}

