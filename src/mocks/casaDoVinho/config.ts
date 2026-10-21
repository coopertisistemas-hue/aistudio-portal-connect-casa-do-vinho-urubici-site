export const casaConfig = {
  brand: "Casa do Vinho Urubici",
  portal: "Portal Urubici",
  portalUrl: "https://www.urubici.com.br/casa-do-vinho",
  city: "Urubici · Santa Catarina",
  address: "Centro de Urubici — Santa Catarina, Brasil",
  whatsappDisplay: "+55 (49) 90000-0000",
  whatsappNumber: "5549900000000",
  formId: "dbce7u5pirsr9cnblbc0",
  formSubmitAddr: "https://readdy.ai/api/form/dbce7u5pirsr9cnblbc0",
  mapEmbed:
    "https://www.google.com/maps?q=Urubici%2C%20Santa%20Catarina%2C%20Brasil&z=13&output=embed",
  video: "https://storage.helloreaddy.io/project_files/400c85a9-2a6c-479b-b2fc-a60c51990d68/38569efa-416c-484d-970b-22db9221c0bc_scrub.mp4",
  poster:
    "https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/815eebecaf958e959e21d4427f6ee7be.jpeg",
  // Release gates — each stays false until the owner supplies written confirmation.
  // monetizationVerified: no "Destaque pago" / "espaço pago" label renders while false.
  monetizationVerified: false,
  // whatsappVerified: displayed number is still the provisional one from the brief.
  whatsappVerified: false,
  // addressVerified: only the city is confirmed; street/number and map pin are pending.
  addressVerified: false,
  // Monetization: highlighted labels. Replaceable by Portal Connect data.
  featuredWineIds: ["imperio-reserva-tinto", "comendador-tinto"]
};