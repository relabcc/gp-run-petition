import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import {
  object,
  string,
  number,
} from 'yup';
import pick from 'lodash/pick';
import set from 'lodash/set';
import Money from 'react-icons/lib/io/social-usd';
import FB from 'react-icons/lib/io/social-facebook';
import Close from 'react-icons/lib/fa/close';

import Button from '../../components/Button';
import Border from '../../components/Border';
import Box from '../../components/Box';
import BackgroundImage from '../../components/BackgroundImage';
import DoubleLayerButton from '../../components/DoubleLayerButton';
import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import Link from '../../components/Link';

import getText from '../../text';

import formHead from './form-head.svg';
import pencil from './pencil.svg';
import thanks from './thanks.svg';

const fields = [
  'fullName',
  'dateOfBirth',
  'email',
  'phoneNumber',
];

const schema = object().shape({
  fullName: string().required(getText('validation.required')),
  email: string().email(getText('validation.email')).required(getText('validation.required')),
  dateOfBirth: number(getText('validation.number'))
    .moreThan((new Date()).getFullYear() - 120, getText('validation.tooOld'))
    .lessThan((new Date()).getFullYear() - 20, getText('validation.tooYoung'))
    .required(getText('validation.required')),
  phoneNumber: string().required(getText('validation.required')),
});

const CleanLink = (props) => (
  <Link
    color="black"
    hoverColor="white"
    noUnderline
    target="_blank"
    {...props}
  />
);

const LinksButton = ({ children, ...props }) => (
  <IconButton
    display="block"
    w={3 / 5}
    color="black"
    hoverBg="teal"
    mb="1em"
    is={CleanLink}
    {...props}
  >
    <Box w="4em" align="left">{children}</Box>
  </IconButton>
);

LinksButton.propTypes = {
  children: PropTypes.node,
};

const PetitionForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  submitted,
  onRequestClose,
}) => (
  <Border
    border="0.25em solid black"
    borderRadius="0.01em"
    p="1em"
    w="25em"
    position="relative"
  >
    <Box position="absolute" top="0" right="-0.25em" transform="translateY(-125%)">
      <Button
        px="0.5em"
        py="0.5em"
        onClick={onRequestClose}
        border="0.25em solid black"
      ><Close /></Button>
    </Box>
    <Box px="5%" textAlign="center">
      {submitted ? (
        <Box px="5%" py="1em">
          <object data={thanks}>
            {getText('petition.thanks')}
          </object>
        </Box>
      ) : (
        <div>
          <Box py="0.5em" fontWeight="bold" f="1.25em">{getText('petition.title')}</Box>
          <Border border="2px solid" mb="0.5em" borderRadius="1em" />
          <Box pb="1.5em">{getText('petition.sub')}</Box>
          <object data={formHead}>
            {getText('petition.hope')}
          </object>
          <Box mt="1em" mb="3em">
            {fields.map((key) => (
              <Input
                key={key}
                my="1em"
                name={key}
                labelWidth="4.5em"
                placeholder={getText(`placeholder.${key}`)}
                label={getText(`petition.${key}`)}
                value={values[key]}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched[key] && errors[key]}
              />
            ))}
            <Box is="label" my="1em" textAlign="left">
              <input type="checkbox" name="emailOkTaiwan" onChange={handleChange} checked={values.emailOkTaiwan} />
              <Box is="span" display="inline" ml="0.5em">{getText('petition.emailOkTaiwan')}</Box>
            </Box>
          </Box>
        </div>
      )}
      { !submitted ? (
        <DoubleLayerButton
          w={3 / 5}
          hoverBg="teal"
          onClick={(e) => submitted ? onRequestClose(e) : handleSubmit(e)}
          disabled={isSubmitting}
          mb="1em"
        >
          {getText('petition.submit')}
        </DoubleLayerButton>
        ) : (
          <div>
            <LinksButton
              icon={<Money />}
              href="https://act.greenpeace.org/page/4723/donate/1?campaign=antarctic&ref=antarctic_thankyou_page"
            >
              {getText('petition.donate')}
            </LinksButton>
            <LinksButton
              icon={<FB />}
              href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fgreenrun.relab.cc"
            >
              {getText('petition.FB')}
            </LinksButton>
          </div>
      )}
    </Box>
    {!submitted && (
      <Box
        position="absolute"
        right="-15%"
        transform="translateY(-150%)"
        w="30%"
      >
        <BackgroundImage src={pencil} ratio={182 / 190} />
      </Box>
    )}
  </Border>
);

PetitionForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  onRequestClose: PropTypes.func,
  isSubmitting: PropTypes.bool,
  submitted: PropTypes.bool,
};

const allFileds = fields.concat('emailOkTaiwan');

const formikConfig = {
  mapPropsToValues: () => fields.reduce((shape, key) => set(shape, key), { emailOkTaiwan: true }),
  validationSchema: schema,
  validateOnChange: false,
  handleSubmit: (values, {
    props,
    setSubmitting,
  }) => {
    const neededValues = pick(values, allFileds);
    props.onSubmit({
      ...neededValues,
      emailOkTaiwan: neededValues.emailOkTaiwan ? 'Y' : 'N',
    }).then(() => setSubmitting(false))
      .catch((err) => {
        console.error(err);
        setSubmitting(false);
      });
  },
};

export default withFormik(formikConfig)(PetitionForm);
