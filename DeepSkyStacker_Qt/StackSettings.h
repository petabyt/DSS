#ifndef STACKSETTINGS_H
#define STACKSETTINGS_H

#include <QDialog>
#include "ResultParameters.h"
#include "CometStacking.h"
#include "PostCalibration.h"

namespace Ui {
class StackSettings;
}

class StackSettings : public QDialog
{
    Q_OBJECT

public:
    explicit StackSettings(QWidget *parent = nullptr);
    ~StackSettings();

private:
    Ui::StackSettings *ui;
    ResultParameters * m_ResultParameters;
    CometStacking * m_CometStacking;
    PostCalibration * m_PostCalibration;
};

#endif // STACKSETTINGS_H
