import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Error from '@/components/Error'
import { Btp } from '@prisma/client'

const validationSchema = Yup.object({
  nom: Yup.string().required("Champ requis").min(3, "3 caratères minimum"),
  prenoms: Yup.string().required("Champ requis"),
  nomjeunefille: Yup.string().required("Champ requis")
})

export default function BtpForm(props: any) {
  const initialValues: Btp = props.data
  return (
    <Formik initialValues={initialValues} onSubmit={(v) => props.onAddBtp(v)} validationSchema={validationSchema} validateOnMount>
      {(formik) => {
        const { errors, touched, isSubmitting, isValid } = formik
        return (
          <Form>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Nom</label>
                <Field className={touched.nom && errors.nom ? "form-control is-invalid" : "form-control"} type='text' name='nom' /><ErrorMessage name="nom" component={Error} />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Prénoms</label>
                <Field className={touched.prenoms && errors.prenoms ? "form-control is-invalid" : "form-control"} type='text' name='prenoms' /><ErrorMessage name="prenoms" component={Error} />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Nom de jeune fille</label>
                <Field className={touched.nomjeunefille && errors.nomjeunefille ? "form-control is-invalid" : "form-control"} type='text' name='nomjeunefille' /><ErrorMessage name="nomjeunefille" component={Error} />
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-lg btn-success" type="submit" disabled={isSubmitting || !isValid}>
                <span className={isSubmitting ? "spinner-border spinner-border-sm": "d-none"}></span> Ajouter
              </button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}