#include "StackSettings.h"
#include "ui_StackSettings.h"

StackSettings::StackSettings(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::StackSettings)
{
    ui->setupUi(this);
    m_ResultParameters = new ResultParameters();
    m_CometStacking = new CometStacking();
    m_PostCalibration = new PostCalibration();

    ui->tabWidget->addTab(m_ResultParameters, m_ResultParameters->windowTitle());
    ui->tabWidget->addTab(m_CometStacking, m_CometStacking->windowTitle());
    ui->tabWidget->addTab(m_PostCalibration, m_PostCalibration->windowTitle());
}

StackSettings::~StackSettings()
{
    delete ui;
    delete m_ResultParameters;
    delete m_CometStacking;
    delete m_PostCalibration;
}
