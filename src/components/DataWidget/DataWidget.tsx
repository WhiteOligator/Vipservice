import { styled } from '@mui/material'
import { SearchButton } from './WidgetComponent/SearchButton'
import { CityInput } from './WidgetComponent/CityInput'
import { Grid } from '@mui/material';
import { DateInput } from './WidgetComponent/DateInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch} from '../../hooks/hooks';
import { setData } from './aviaRoadSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { options } from '../../data/data';

const SectionDate = styled('form')({
  maxWidth: '980px',
  boxShadow: '0px 0px 14px 0px rgba(112, 121, 153, 0.3)',
  borderRadius: '15px'
})

const DateCityContainer = styled('section')({
  padding: '30px',
  height: '100px',
  backgroundColor: '#5C87DB',
  borderRadius: '15px 15px 0px 0px'
})

const SearchSection = styled('div')({
  display: 'flex',
  justifyContent: 'end',
  backgroundColor: '#fff',
  borderRadius: '0px 0px 15px 15px'
})

const value = {
  fromCity: '',
  toCity: '',
  fromDate: '',
  toDate: ''
}



const Validationscheme = Yup.object({
  fromCity: Yup.string()
    .max(15, 'Необходимо выбрать город')
    .required('Необходимо выбрать город'),
  toCity: Yup.string()
    .max(20, 'Необходимо выбрать город')
    .required('Необходимо выбрать город'),
  fromDate: Yup.string().required('Введите дату'),
})

export const DataWidget = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      fromCity: '',
      toCity: '',
      fromDate: '',
      toDate: ''
    },
    validationSchema: Validationscheme,
    onSubmit: value => {
      dispatch(setData(value))
      navigate('info')
    },
  });
  
  useEffect(() => {
    dispatch(setData(value))
  },[dispatch])


  return (
    <SectionDate onSubmit={formik.handleSubmit}>
      <DateCityContainer>
        <Grid container spacing={10} >
            <Grid item xs={3}>
              <CityInput
                name="fromCity"
                options={options}
                label='Откуда'
                value={formik.values.fromCity}
                Label2='Город вылета'
                setFieldValue={formik.setFieldValue}
                onBlur={formik.handleBlur}
                error={formik.errors.fromCity}
                touched={formik.touched.fromCity}   
              />
             </Grid>
            <Grid item xs={3}>
              <CityInput
                 name="toCity"
                 options={options}
                 label='Куда'
                 value={formik.values.toCity}
                 Label2='Город прилёта'
                 setFieldValue={formik.setFieldValue}
                 onBlur={formik.handleBlur}
                 error={formik.errors.toCity} 
                 touched={formik.touched.toCity}   
              />
            </Grid>
            <Grid item xs={6}>
              <DateInput
                nameFrom="fromDate"
                nameTo="toDate"
                value={formik.values}
                setFieldValue={formik.setFieldValue}
                error={formik.errors}
                onBlur={formik.handleBlur}
                touched={formik.touched}
              />
            </Grid>     
        </Grid>  
      </DateCityContainer>
      <SearchSection>
        <SearchButton
          type="submit"
          title={'Найти билеты'}
        />
      </SearchSection>
    </SectionDate>
  )
}
