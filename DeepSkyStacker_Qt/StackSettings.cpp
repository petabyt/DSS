#include "StackSettings.h"
#include "ui/ui_StackSettings.h"

StackSettings::StackSettings(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::StackSettings)
{
    ui->setupUi(this);
    m_ResultParameters = new ResultParameters();
    m_CometStacking = new CometStacking();
    m_AlignmentParameters = new AlignmentParameters();
    m_IntermediateFiles = new IntermediateFiles();
    m_PostCalibration = new PostCalibration();
    m_OutputTab = new OutputTab();
    m_StackingParametersLight = new StackingParameters();
    m_StackingParametersDark = new StackingParameters();
    m_StackingParametersFlat = new StackingParameters();
    m_StackingParametersBias = new StackingParameters();

    ui->tabWidget->addTab(m_ResultParameters, m_ResultParameters->windowTitle());
    ui->tabWidget->addTab(m_CometStacking, m_CometStacking->windowTitle());
    ui->tabWidget->addTab(m_StackingParametersLight, tr("Light"));
    ui->tabWidget->addTab(m_StackingParametersDark, tr("Dark"));
    ui->tabWidget->addTab(m_StackingParametersFlat, tr("Flat"));
    ui->tabWidget->addTab(m_StackingParametersBias, tr("Bias/Offset"));
    ui->tabWidget->addTab(m_AlignmentParameters, m_AlignmentParameters->windowTitle());
    ui->tabWidget->addTab(m_IntermediateFiles, m_IntermediateFiles->windowTitle());
    ui->tabWidget->addTab(m_PostCalibration, m_PostCalibration->windowTitle());
    ui->tabWidget->addTab(m_OutputTab, m_OutputTab->windowTitle());
}

StackSettings::~StackSettings()
{
    delete ui;
    delete m_ResultParameters;
    delete m_CometStacking;
    delete m_IntermediateFiles;
    delete m_PostCalibration;
    delete m_OutputTab;
}
