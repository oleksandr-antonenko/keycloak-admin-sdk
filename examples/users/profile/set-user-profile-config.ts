// Configuration for Keycloak SDK
import { KeycloakConfig } from '../../../src/types/auth';
import KeycloakClient from '../../../src';
import { UPConfig } from '../../../src/types/users';

const config: KeycloakConfig = {
  baseUrl: 'http://localhost:8080',
  realm: 'your-realm',
  authMethod: 'client',
  credentials: {
    clientId: 'your-client-id',
    clientSecret: 'your-client-secret'
  }
};

// Instantiate Keycloak SDK
const sdk = new KeycloakClient(config);

(async () => {
  try {
    // New user profile configuration
    const newProfileConfig: UPConfig = {
      attributes: [
        {
          name: 'newAttribute',
          displayName: 'New Attribute',
          required: true,
          readOnly: false,
          annotations: {},
          validators: {},
          group: 'general',
          multivalued: false
        }
      ],
      groups: [
        {
          name: 'general',
          displayHeader: 'General Information',
          displayDescription: 'General user information',
          annotations: {}
        }
      ]
    };

    // Set user profile configuration
    const updatedProfileConfig: UPConfig = await sdk.users.setUserProfileConfig(newProfileConfig);
  } catch (error) {
    console.error('Error setting user profile config:', error);
  }
})();
