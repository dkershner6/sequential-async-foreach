import { Node20TypeScriptProject } from "dkershner6-projen-typescript";
import { TextFile } from "projen";
import { Nvmrc } from "projen-nvm";

const PACKAGE_NAME = "sequential-async-foreach";

const project = new Node20TypeScriptProject({
    majorVersion: 1,

    defaultReleaseBranch: "main",
    name: PACKAGE_NAME,
    keywords: ["await", "sequential", "async", "forEach", "Promise"],
    description:
        "An NPM package to properly handle using async functions in a forEach fashion (unlike Native forEach). Uses proper Promises and is light and efficient.",
    homepage: `https://github.com/dkershner6/${PACKAGE_NAME}#readme`,
    bugsUrl: `https://github.com/dkershner6/${PACKAGE_NAME}/issues`,
    authorName: "Derek Kershner",
    authorUrl: "https://dkershner.com",
    repository: `git+https://github.com/dkershner6/${PACKAGE_NAME}.git`,
    projenrcTs: true,

    devDeps: ["await-wait", "dkershner6-projen-typescript", "projen-nvm"],

    release: true,
    releaseToNpm: true,
    github: true,

    docgen: true,
    sampleCode: false,
});

new Nvmrc(project);

new TextFile(project, ".github/CODEOWNERS", { lines: ["* @dkershner6"] });

project.synth();
