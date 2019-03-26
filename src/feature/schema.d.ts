export interface Schema {
  name: string;
  /**
   * Target apps 
   */
  projects?: string;
  /**
   * Target platforms 
   */
  platforms?: string;
  /**
   * Only generate for specified projects and ignore shared code
   */
  onlyProject?: boolean;
  /**
   * Only generate the module and ignore default component creation
   */
  onlyModule?: boolean;
  /**
   * Create base component for maximum code sharing
   */
  createBase?: boolean;
  /**
   * Configure routing
   */
  routing?: boolean;
  /**
   * Add link to route for sandbox
   */
  adjustSandbox?: boolean;
  /**
   * Skip formatting
   */
  skipFormat?: boolean;
}
