// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Alert from '../../../components/alert/Alert';

type Props = {|
  +countries: $ReadOnlyArray<string>,
|};

export default function VisaWarning(props: Props) {
  if (props.countries.length === 0) {
    return null;
  }
  return (
    <Alert
      type="warning"
      title={<Translation id="mmb.visa_state.visa_may_be_required_in" />}
    >
      {props.countries.map(country => (
        <Text key={country} style={styles.country}>
          <Translation passThrough={country} />
        </Text>
      ))}
    </Alert>
  );
}

const styles = StyleSheet.create({
  country: {
    fontSize: 12,
    color: defaultTokens.paletteOrangeNormal,
    fontWeight: '600',
  },
});
