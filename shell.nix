{ pkgs ? import <nixpkgs> {} }:

with pkgs;

mkShell {
  buildInputs = [
    pkgs.nodePackages.node2nix
    pkgs.nodejs-14_x
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.eslint
    pkgs.nodePackages.typescript
  ];
}
