import { Formik, Form, Field, ErrorMessage } from 'formik';
  import * as Yup from 'yup';
  import Error from '@/components/Error';
  import { Btp } from '@prisma/client';
  
  const validationSchema = Yup.object({
    nom: Yup.string().required("Champ requis"),
    prenoms: Yup.string().required("Champ requis"),
    nomjeunefille: Yup.string().required("Champ requis")
  })
  
  export default function BtpForm(props: any) {
    const  initialValues:Btp = props.data;
    return (
      <Formik initialValues={initialValues} onSubmit={(v) => props.onAddBtp(v)} validationSchema={validationSchema}>
        <Form className="forms-sample">
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <Field type='text' name='nom' className="form-control" />
            <ErrorMessage name="nom" component={Error} />
          </div>
          <div className="mb-3">
            <label className="form-label">Prénoms</label>
            <Field type='text' name='prenoms' className="form-control" />
            <ErrorMessage name="prenoms" component={Error} />
          </div>
          <div className="mb-3">
            <label className="form-label">Nom de jeune fille</label>
            <Field type='text' name='nomjeunefille' className="form-control" />
            <ErrorMessage name="nomjeunefille" component={Error} />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-lg btn-inverse-success" >Ajouter</button>
          </div>
        </Form>
      </Formik>
    );
  }