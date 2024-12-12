import { Command } from '@heroku-cli/command';
export default class Login extends Command {
    static topic: string;
    static description: string;
    static flags: {
        verbose: import("@oclif/core/lib/interfaces").BooleanFlag<boolean>;
    };
    run(): Promise<void>;
}
