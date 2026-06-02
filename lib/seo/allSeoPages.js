import { ispezioniSeoPages } from "./ispezioni"
import { agricolturaAmbienteSeoPages } from "./agricolturaAmbiente"
import { aziendeTecniciSeoPages } from "./aziendeTecnici"
import { aziendeTecniciMegaSeoPages } from "./aziendeTecniciMega"
import { controlliDroneEdificiMegaSeoPages } from "./controlliDroneEdificiMega"
import { documentazioneDroneTecnicaMegaSeoPages } from "./documentazioneDroneTecnicaMega"
import { ediliziaManutenzioneSeoPages } from "./ediliziaManutenzione"
import { fortiSeoPages } from "./forti"
import { immobiliareSeoPages } from "./immobiliare"
import { industriaLogisticaSeoPages } from "./industriaLogistica"
import { altreSeoPages } from "./altreSeoPages"
import { seoQuantoRicercaServiziSettoriPages } from "./seoQuantoRicercaServiziSettori"
import { seoRilieviVariePages } from "./seoRilieviVarie"
import { megaOperativiSeoPages } from "./seoMegaOperativi"
import { seoSoluzioniSopralluoghiTerritorioUsiPages } from "./seoSoluzioniSopralluoghiTerritorioUsi"

export const allSeoPages = [
  ...ispezioniSeoPages,
  ...agricolturaAmbienteSeoPages,
  ...aziendeTecniciSeoPages,
  ...aziendeTecniciMegaSeoPages,
  ...controlliDroneEdificiMegaSeoPages,
  ...documentazioneDroneTecnicaMegaSeoPages,
  ...ediliziaManutenzioneSeoPages,
  ...fortiSeoPages,
  ...immobiliareSeoPages,
  ...industriaLogisticaSeoPages,
  ...altreSeoPages,
  ...seoQuantoRicercaServiziSettoriPages,
  ...seoRilieviVariePages,
  ...megaOperativiSeoPages,
  ...seoSoluzioniSopralluoghiTerritorioUsiPages
]