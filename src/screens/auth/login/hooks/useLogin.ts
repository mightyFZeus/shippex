import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {InferType, object, string} from 'yup';
import {EMAIL, ON_BLUR, PASSWORD} from '../../../../constants/constants';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAppDispatch} from '../../../../store/hooks';
import {toggleIsLoggedIn} from '../../../../appSlice';

export const useLogin = () => {
  const schema = object({
    [PASSWORD]: string().required('Password is required'),
    [EMAIL]: string()
      .required('Email is required')
      .email('Provide a valid email'),
  });

  type Inputs = InferType<typeof schema>;

  const {
    handleSubmit,
    formState: {errors, isValid},
    control,
  } = useForm<Inputs>({resolver: yupResolver(schema), mode: ON_BLUR});

  const dispatch = useAppDispatch();

  const submitHandler: SubmitHandler<Inputs> = () => {
    dispatch(toggleIsLoggedIn(true));
  };

  return {
    onSubmit: handleSubmit(submitHandler),
    control,
    Controller,
    errors,
    isValid,
  };
};
