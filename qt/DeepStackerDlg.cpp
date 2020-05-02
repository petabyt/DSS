#include "DeepStackerDlg.h"
#include "ui_DeepStackerDlg.h"

DeepStackerDlg::DeepStackerDlg(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::DeepStackerDlg)
{
    ui->setupUi(this);
    setWindowTitle(QString(tr("DeepSkyStacker %1")).arg("1.0.0.1" /* VERSION_DEEPSKYSTACKER */));
    m_ExplorerBar = new ExplorerBar(this);
    ui->layoutLeft->addWidget(m_ExplorerBar);
}

DeepStackerDlg::~DeepStackerDlg()
{
    delete ui;
    delete m_ExplorerBar;
}
