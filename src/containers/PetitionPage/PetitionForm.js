import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
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
import { Scrollbars } from 'react-custom-scrollbars';
import { withContentRect } from 'react-measure';

import Button from '../../components/Button';
import Flex from '../../components/Flex';
import Border from '../../components/Border';
import Box from '../../components/Box';
import BackgroundImage from '../../components/BackgroundImage';
import DoubleLayerButton from '../../components/DoubleLayerButton';
import IconButton from '../../components/IconButton';
import Input from '../../components/Input';
import Link from '../../components/Link';
import Text from '../../components/Text';
import Checkbox from '../../components/Checkbox';
import withResponsive from '../../hoc/withResponsive';

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
    color="black"
    hoverBg="teal"
    w={[1, null, null, '15em']}
    m="0.5em"
    is={CleanLink}
    {...props}
  >
    <Box w="4em" align="left">{children}</Box>
  </IconButton>
);

LinksButton.propTypes = {
  children: PropTypes.node,
};

class PetitionForm extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }

  render() {
    const {
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      submitted,
      onRequestClose,
      measureRef,
      contentRect: { bounds }
    } = this.props;
    return (
      <Border
        border="0.25em solid black"
        borderRadius="0.01em"
        w={['18em', '20em', null, '40em', '50em']}
        py="1em"
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
        <Scrollbars style={{ height: Math.min(window.innerHeight * 0.7, bounds.height) || '70vh' }}>
          <Box innerRef={measureRef} textAlign="center" w={1} overflow="hidden">
            {submitted ? (
              <Box px={['10%', null, null, '30%']} py="1em">
                <object data={thanks}>
                  {getText('petition.thanks')}
                </object>
              </Box>
            ) : (
              <Box px="1em">
                <Box py="0.5em" fontWeight="bold" f="1.5em">{getText('petition.title')}</Box>
                <Box pb="1.5em" fontWeight="700">{getText('petition.sub')}</Box>
                <Box px={[null, null, null, '25%']}>
                  <object data={formHead}>
                    {getText('petition.hope')}
                  </object>
                </Box>
                <Box mt="1em" mb="2em" textAlign="left">
                  <Flex flexWrap="wrap" px={[null, null, null, "8%"]}>
                  {fields.map((key) => (
                    <Input
                      w={[1, null, null, 1 / 2]}
                      key={key}
                      my="0.5em"
                      px={[null, null, null, "0.5em"]}
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
                  </Flex>
                  <Box px={[null, null, null, "8%"]}>
                    <Checkbox
                      f="0.9em"
                      my="1em"
                      mx="0.5rem"
                      name="emailOkTaiwan"
                      onChange={handleChange}
                      checked={values.emailOkTaiwan}
                    >
                      我要即時收到最新專案訊息，知道更多參與和協助的方法。
                    </Checkbox>
                    <Text f="0.8em">
                      （綠色和平尊重並保障您的個人隱私資料，您隨時可取消訂閱，請參考<Link target="_blank" href="https://www.greenpeace.org/taiwan/zh/aboutus/privacy/">隱私保護政策</Link>。）
                    </Text>
                  </Box>
                </Box>
              </Box>
            )}
            <Box position="relative">
              {!submitted ? (
                <DoubleLayerButton
                  w={[1 / 2, null, null, 1 / 4]}
                  hoverBg="teal"
                  onClick={(e) => submitted ? onRequestClose(e) : handleSubmit(e)}
                  disabled={isSubmitting}
                  mb="1em"
                >
                  {getText('petition.submit')}
                </DoubleLayerButton>
              ) : (
                <Flex flexDirection={['row', null, null, 'column']} align="center">
                  <LinksButton
                    icon={<Money />}
                    href="https://act.greenpeace.org/page/4723/donate/1?ref=marathon_thankyou_page"
                  >
                    {getText('petition.donate')}
                  </LinksButton>
                  <LinksButton
                    icon={<FB />}
                    href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fact.gp/2JlrNWw"
                  >
                    {getText('petition.FB')}
                  </LinksButton>
                </Flex>
              )}
            </Box>
          </Box>
        </Scrollbars>
        {!submitted && !this.props.browser.lessThan.sm &&(
          <Box
            position="absolute"
            right="-10%"
            bottom="0"
            transform="translateY(-50%)"
            w="20%"
          >
            <BackgroundImage src={pencil} ratio={182 / 190} />
          </Box>
        )}
      </Border>
    );
  }
}

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

export default withResponsive(compose(
  withFormik(formikConfig),
  withContentRect('bounds')
)(PetitionForm));
