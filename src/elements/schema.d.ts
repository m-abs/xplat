export interface Schema {
  name?: string;
  /**
   * The barrel in your workspace that contains the components you'd like to create as custom elements.
   */
  barrel?: string;
  /**
   * Comma delimited list of components from your barrel to create as custom elements.
   */
  components?: string;
  /**
   * Update builder files to use a different Angular Element module
   */
  builderModule?: string;
  /**
   * A unique prefix to add to each custom element. Defaults to workspace selector setting.
   */
  prefix?: string;
  /**
   * Skip formatting
   */
  skipFormat?: boolean;
  
}
