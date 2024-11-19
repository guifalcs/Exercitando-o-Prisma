-- CreateTable
CREATE TABLE `MovimentoFinanceiro` (
    `idMovimentoFinanceiro` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nCodTitulo` INTEGER NOT NULL,
    `nCodCliente` INTEGER NOT NULL,
    `nCodCtr` INTEGER NULL,
    `nCodOS` INTEGER NOT NULL,
    `cCodProjeto` INTEGER NULL,
    `nCodNF` INTEGER NOT NULL,
    `nCodMovCC` INTEGER NOT NULL,
    `nCodBaixa` INTEGER NOT NULL,
    `cNumCtr` VARCHAR(20) NOT NULL,
    `cNumOS` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`idMovimentoFinanceiro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contrato` (
    `idContrato` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idContrato`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projeto` (
    `idProjeto` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idProjeto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrdemDeServico` (
    `idOrdemDeServico` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idOrdemDeServico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NFSe` (
    `idNF` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`idNF`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `idCliente` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idCliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Titulo` (
    `idTitulo` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idTitulo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `idCategoria` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriasOnMovimentoFinanceiro` (
    `codigoCat` VARCHAR(20) NOT NULL,
    `idMovimentoFinanceiro` INTEGER NOT NULL,
    `porcentagemCategoria` DOUBLE NOT NULL,

    PRIMARY KEY (`codigoCat`, `idMovimentoFinanceiro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departamento` (
    `idDepartamento` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idDepartamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DepartamentoOnMovimentoFinanceiro` (
    `codDepartamento` VARCHAR(40) NOT NULL,
    `idMovimentoFinanceiro` INTEGER NOT NULL,
    `porcentagemDepartamento` DOUBLE NOT NULL,

    PRIMARY KEY (`codDepartamento`, `idMovimentoFinanceiro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MovimentoFinanceiro` ADD CONSTRAINT `MovimentoFinanceiro_nCodCtr_fkey` FOREIGN KEY (`nCodCtr`) REFERENCES `Contrato`(`idContrato`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovimentoFinanceiro` ADD CONSTRAINT `MovimentoFinanceiro_cCodProjeto_fkey` FOREIGN KEY (`cCodProjeto`) REFERENCES `Projeto`(`idProjeto`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovimentoFinanceiro` ADD CONSTRAINT `MovimentoFinanceiro_nCodOS_fkey` FOREIGN KEY (`nCodOS`) REFERENCES `OrdemDeServico`(`idOrdemDeServico`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovimentoFinanceiro` ADD CONSTRAINT `MovimentoFinanceiro_nCodNF_fkey` FOREIGN KEY (`nCodNF`) REFERENCES `NFSe`(`idNF`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovimentoFinanceiro` ADD CONSTRAINT `MovimentoFinanceiro_nCodCliente_fkey` FOREIGN KEY (`nCodCliente`) REFERENCES `Cliente`(`idCliente`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovimentoFinanceiro` ADD CONSTRAINT `MovimentoFinanceiro_nCodTitulo_fkey` FOREIGN KEY (`nCodTitulo`) REFERENCES `Titulo`(`idTitulo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriasOnMovimentoFinanceiro` ADD CONSTRAINT `CategoriasOnMovimentoFinanceiro_codigoCat_fkey` FOREIGN KEY (`codigoCat`) REFERENCES `Categoria`(`idCategoria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriasOnMovimentoFinanceiro` ADD CONSTRAINT `CategoriasOnMovimentoFinanceiro_idMovimentoFinanceiro_fkey` FOREIGN KEY (`idMovimentoFinanceiro`) REFERENCES `MovimentoFinanceiro`(`idMovimentoFinanceiro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DepartamentoOnMovimentoFinanceiro` ADD CONSTRAINT `DepartamentoOnMovimentoFinanceiro_codDepartamento_fkey` FOREIGN KEY (`codDepartamento`) REFERENCES `Departamento`(`idDepartamento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DepartamentoOnMovimentoFinanceiro` ADD CONSTRAINT `DepartamentoOnMovimentoFinanceiro_idMovimentoFinanceiro_fkey` FOREIGN KEY (`idMovimentoFinanceiro`) REFERENCES `MovimentoFinanceiro`(`idMovimentoFinanceiro`) ON DELETE RESTRICT ON UPDATE CASCADE;
